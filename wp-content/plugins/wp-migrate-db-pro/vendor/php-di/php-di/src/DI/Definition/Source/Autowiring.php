<?php

namespace DeliciousBrains\WPMDB\Container\DI\Definition\Source;

use DeliciousBrains\WPMDB\Container\DI\Definition\EntryReference;
use DeliciousBrains\WPMDB\Container\DI\Definition\ObjectDefinition;
use DeliciousBrains\WPMDB\Container\DI\Definition\ObjectDefinition\MethodInjection;
/**
 * Reads DI class definitions using reflection.
 *
 * @author Matthieu Napoli <matthieu@mnapoli.fr>
 */
class Autowiring implements \DeliciousBrains\WPMDB\Container\DI\Definition\Source\DefinitionSource
{
    /**
     * {@inheritdoc}
     */
    public function getDefinition($name)
    {
        if (!\class_exists($name) && !\interface_exists($name)) {
            return null;
        }
        $definition = new \DeliciousBrains\WPMDB\Container\DI\Definition\ObjectDefinition($name);
        // Constructor
        $class = new \ReflectionClass($name);
        $constructor = $class->getConstructor();
        if ($constructor && $constructor->isPublic()) {
            $definition->setConstructorInjection(\DeliciousBrains\WPMDB\Container\DI\Definition\ObjectDefinition\MethodInjection::constructor($this->getParametersDefinition($constructor)));
        }
        return $definition;
    }
    /**
     * Read the type-hinting from the parameters of the function.
     */
    private function getParametersDefinition(\ReflectionFunctionAbstract $constructor)
    {
        $parameters = [];
        foreach ($constructor->getParameters() as $index => $parameter) {
            // Skip optional parameters
            if ($parameter->isOptional()) {
                continue;
            }
            $parameterClass = $parameter->getClass();
            if ($parameterClass) {
                $parameters[$index] = new \DeliciousBrains\WPMDB\Container\DI\Definition\EntryReference($parameterClass->getName());
            }
        }
        return $parameters;
    }
}

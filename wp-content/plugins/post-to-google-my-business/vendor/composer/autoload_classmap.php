<?php

// autoload_classmap.php @generated by Composer

$vendorDir = dirname(dirname(__FILE__));
$baseDir = dirname($vendorDir);

return array(
    'PGMB\\API\\APIInterface' => $baseDir . '/src/API/APIInterface.php',
    'PGMB\\API\\GoogleAPIError' => $baseDir . '/src/API/GoogleAPIError.php',
    'PGMB\\BackgroundProcessing\\BackgroundProcess' => $baseDir . '/src/BackgroundProcessing/BackgroundProcess.php',
    'PGMB\\BackgroundProcessing\\GooglePostManager' => $baseDir . '/src/BackgroundProcessing/GooglePostManager.php',
    'PGMB\\BackgroundProcessing\\PostPublishProcess' => $baseDir . '/src/BackgroundProcessing/PostPublishProcess.php',
    'PGMB\\Components\\BusinessSelector' => $baseDir . '/src/Components/BusinessSelector.php',
    'PGMB\\Epitrove' => $baseDir . '/src/Epitrove.php',
    'PGMB\\Google\\AbstractGoogleJsonObject' => $baseDir . '/src/Google/AbstractGoogleJsonObject.php',
    'PGMB\\Google\\CallToAction' => $baseDir . '/src/Google/CallToAction.php',
    'PGMB\\Google\\Date' => $baseDir . '/src/Google/Date.php',
    'PGMB\\Google\\LocalPost' => $baseDir . '/src/Google/LocalPost.php',
    'PGMB\\Google\\LocalPostEditMask' => $baseDir . '/src/Google/LocalPostEditMask.php',
    'PGMB\\Google\\LocalPostEvent' => $baseDir . '/src/Google/LocalPostEvent.php',
    'PGMB\\Google\\LocalPostJsonDeserializeInterface' => $baseDir . '/src/Google/LocalPostJsonDeserializeInterface.php',
    'PGMB\\Google\\LocalPostOffer' => $baseDir . '/src/Google/LocalPostOffer.php',
    'PGMB\\Google\\LocalPostProduct' => $baseDir . '/src/Google/LocalPostProduct.php',
    'PGMB\\Google\\MediaItem' => $baseDir . '/src/Google/MediaItem.php',
    'PGMB\\Google\\Money' => $baseDir . '/src/Google/Money.php',
    'PGMB\\Google\\PostReference' => $baseDir . '/src/Google/PostReference.php',
    'PGMB\\Google\\PublishedLocalPost' => $baseDir . '/src/Google/PublishedLocalPost.php',
    'PGMB\\Google\\TimeInterval' => $baseDir . '/src/Google/TimeInterval.php',
    'PGMB\\Google\\TimeOfDay' => $baseDir . '/src/Google/TimeOfDay.php',
    'PGMB\\ParseFormFields' => $baseDir . '/src/ParseFormFields.php',
    'PGMB\\PostTypes\\AbstractPostType' => $baseDir . '/src/PostTypes/AbstractPostType.php',
    'PGMB\\PostTypes\\PostTypeDefinition' => $baseDir . '/src/PostTypes/PostTypeDefinition.php',
    'PGMB\\PostTypes\\PostTypeItem' => $baseDir . '/src/PostTypes/PostTypeItem.php',
    'PGMB\\PostTypes\\SubPost' => $baseDir . '/src/PostTypes/SubPost.php',
    'PGMB\\Tests\\Google\\CallToActionTest' => $baseDir . '/tests/PGMB/Google/CallToActionTest.php',
    'PGMB\\Tests\\Google\\DateTest' => $baseDir . '/tests/PGMB/Google/DateTest.php',
    'PGMB\\Tests\\Google\\LocalPostEditMaskTest' => $baseDir . '/tests/PGMB/Google/LocalPostEditMaskTest.php',
    'PGMB\\Tests\\Google\\LocalPostOfferTest' => $baseDir . '/tests/PGMB/Google/LocalPostOfferTest.php',
    'PGMB\\Tests\\Google\\LocalPostTest' => $baseDir . '/tests/PGMB/Google/LocalPostTest.php',
    'PGMB\\Tests\\Google\\TimeIntervalTest' => $baseDir . '/tests/PGMB/Google/TimeIntervalTest.php',
    'PGMB\\Upgrader\\DistributedUpgrade' => $baseDir . '/src/Upgrader/DistributedUpgrade.php',
    'PGMB\\Upgrader\\Upgrade' => $baseDir . '/src/Upgrader/Upgrade.php',
    'PGMB\\Upgrader\\Upgrade_2_2_3' => $baseDir . '/src/Upgrader/Upgrade_2_2_3.php',
    'PGMB\\Upgrader\\Upgrader' => $baseDir . '/src/Upgrader/Upgrader.php',
    'PGMB\\Vendor\\Cron\\AbstractField' => $vendorDir . '/dragonmantank/cron-expression/src/Cron/AbstractField.php',
    'PGMB\\Vendor\\Cron\\CronExpression' => $vendorDir . '/dragonmantank/cron-expression/src/Cron/CronExpression.php',
    'PGMB\\Vendor\\Cron\\DayOfMonthField' => $vendorDir . '/dragonmantank/cron-expression/src/Cron/DayOfMonthField.php',
    'PGMB\\Vendor\\Cron\\DayOfWeekField' => $vendorDir . '/dragonmantank/cron-expression/src/Cron/DayOfWeekField.php',
    'PGMB\\Vendor\\Cron\\FieldFactory' => $vendorDir . '/dragonmantank/cron-expression/src/Cron/FieldFactory.php',
    'PGMB\\Vendor\\Cron\\FieldInterface' => $vendorDir . '/dragonmantank/cron-expression/src/Cron/FieldInterface.php',
    'PGMB\\Vendor\\Cron\\HoursField' => $vendorDir . '/dragonmantank/cron-expression/src/Cron/HoursField.php',
    'PGMB\\Vendor\\Cron\\MinutesField' => $vendorDir . '/dragonmantank/cron-expression/src/Cron/MinutesField.php',
    'PGMB\\Vendor\\Cron\\MonthField' => $vendorDir . '/dragonmantank/cron-expression/src/Cron/MonthField.php',
    'PGMB\\Vendor\\Cron\\YearField' => $vendorDir . '/dragonmantank/cron-expression/src/Cron/YearField.php',
    'PGMB\\Vendor\\Html2Text\\BasicTest' => $vendorDir . '/html2text/html2text/test/BasicTest.php',
    'PGMB\\Vendor\\Html2Text\\BlockquoteTest' => $vendorDir . '/html2text/html2text/test/BlockquoteTest.php',
    'PGMB\\Vendor\\Html2Text\\ConstructorTest' => $vendorDir . '/html2text/html2text/test/ConstructorTest.php',
    'PGMB\\Vendor\\Html2Text\\DefinitionListTest' => $vendorDir . '/html2text/html2text/test/DefinitionListTest.php',
    'PGMB\\Vendor\\Html2Text\\Html2Text' => $vendorDir . '/html2text/html2text/src/Html2Text.php',
    'PGMB\\Vendor\\Html2Text\\HtmlCharsTest' => $vendorDir . '/html2text/html2text/test/HtmlCharsTest.php',
    'PGMB\\Vendor\\Html2Text\\ImageTest' => $vendorDir . '/html2text/html2text/test/ImageTest.php',
    'PGMB\\Vendor\\Html2Text\\LinkTest' => $vendorDir . '/html2text/html2text/test/LinkTest.php',
    'PGMB\\Vendor\\Html2Text\\ListTest' => $vendorDir . '/html2text/html2text/test/ListTest.php',
    'PGMB\\Vendor\\Html2Text\\PreTest' => $vendorDir . '/html2text/html2text/test/PreTest.php',
    'PGMB\\Vendor\\Html2Text\\PrintTest' => $vendorDir . '/html2text/html2text/test/PrintTest.php',
    'PGMB\\Vendor\\Html2Text\\SearchReplaceTest' => $vendorDir . '/html2text/html2text/test/SearchReplaceTest.php',
    'PGMB\\Vendor\\Html2Text\\SpanTest' => $vendorDir . '/html2text/html2text/test/SpanTest.php',
    'PGMB\\Vendor\\Html2Text\\StrToUpperTest' => $vendorDir . '/html2text/html2text/test/HeaderTest.php',
    'PGMB\\Vendor\\Html2Text\\TableTest' => $vendorDir . '/html2text/html2text/test/TableTest.php',
    'PGMB\\Vendor\\Rarst\\WordPress\\DateTime\\WpDateTime' => $vendorDir . '/rarst/wpdatetime/src/WpDateTime.php',
    'PGMB\\Vendor\\Rarst\\WordPress\\DateTime\\WpDateTimeImmutable' => $vendorDir . '/rarst/wpdatetime/src/WpDateTimeImmutable.php',
    'PGMB\\Vendor\\Rarst\\WordPress\\DateTime\\WpDateTimeInterface' => $vendorDir . '/rarst/wpdatetime/src/WpDateTimeInterface.php',
    'PGMB\\Vendor\\Rarst\\WordPress\\DateTime\\WpDateTimeTrait' => $vendorDir . '/rarst/wpdatetime/src/WpDateTimeTrait.php',
    'PGMB\\Vendor\\Rarst\\WordPress\\DateTime\\WpDateTimeZone' => $vendorDir . '/rarst/wpdatetime/src/WpDateTimeZone.php',
    'PGMB\\WeDevsSettingsAPI' => $baseDir . '/src/WeDevsSettingsAPI.php',
    'TypistTech\\Imposter\\ArrayUtil' => $vendorDir . '/typisttech/imposter/src/ArrayUtil.php',
    'TypistTech\\Imposter\\Config' => $vendorDir . '/typisttech/imposter/src/Config.php',
    'TypistTech\\Imposter\\ConfigCollection' => $vendorDir . '/typisttech/imposter/src/ConfigCollection.php',
    'TypistTech\\Imposter\\ConfigCollectionFactory' => $vendorDir . '/typisttech/imposter/src/ConfigCollectionFactory.php',
    'TypistTech\\Imposter\\ConfigCollectionInterface' => $vendorDir . '/typisttech/imposter/src/ConfigCollectionInterface.php',
    'TypistTech\\Imposter\\ConfigFactory' => $vendorDir . '/typisttech/imposter/src/ConfigFactory.php',
    'TypistTech\\Imposter\\ConfigInterface' => $vendorDir . '/typisttech/imposter/src/ConfigInterface.php',
    'TypistTech\\Imposter\\Filesystem' => $vendorDir . '/typisttech/imposter/src/Filesystem.php',
    'TypistTech\\Imposter\\FilesystemInterface' => $vendorDir . '/typisttech/imposter/src/FilesystemInterface.php',
    'TypistTech\\Imposter\\Imposter' => $vendorDir . '/typisttech/imposter/src/Imposter.php',
    'TypistTech\\Imposter\\ImposterFactory' => $vendorDir . '/typisttech/imposter/src/ImposterFactory.php',
    'TypistTech\\Imposter\\ImposterInterface' => $vendorDir . '/typisttech/imposter/src/ImposterInterface.php',
    'TypistTech\\Imposter\\Plugin\\Capability\\CommandProvider' => $vendorDir . '/typisttech/imposter-plugin/src/Capability/CommandProvider.php',
    'TypistTech\\Imposter\\Plugin\\Command\\RunCommand' => $vendorDir . '/typisttech/imposter-plugin/src/Command/RunCommand.php',
    'TypistTech\\Imposter\\Plugin\\ImposterPlugin' => $vendorDir . '/typisttech/imposter-plugin/src/ImposterPlugin.php',
    'TypistTech\\Imposter\\ProjectConfig' => $vendorDir . '/typisttech/imposter/src/ProjectConfig.php',
    'TypistTech\\Imposter\\ProjectConfigInterface' => $vendorDir . '/typisttech/imposter/src/ProjectConfigInterface.php',
    'TypistTech\\Imposter\\StringUtil' => $vendorDir . '/typisttech/imposter/src/StringUtil.php',
    'TypistTech\\Imposter\\Transformer' => $vendorDir . '/typisttech/imposter/src/Transformer.php',
    'TypistTech\\Imposter\\TransformerInterface' => $vendorDir . '/typisttech/imposter/src/TransformerInterface.php',
    'WP_Async_Request' => $vendorDir . '/a5hleyrich/wp-background-processing/classes/wp-async-request.php',
    'WP_Background_Process' => $vendorDir . '/a5hleyrich/wp-background-processing/classes/wp-background-process.php',
);
<?php

namespace ContainerTDORjp8;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getPropertyInfoService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'property_info' shared service.
     *
     * @return \Symfony\Component\PropertyInfo\PropertyInfoExtractor
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'symfony'.\DIRECTORY_SEPARATOR.'property-info'.\DIRECTORY_SEPARATOR.'PropertyTypeExtractorInterface.php';
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'symfony'.\DIRECTORY_SEPARATOR.'property-info'.\DIRECTORY_SEPARATOR.'PropertyDescriptionExtractorInterface.php';
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'symfony'.\DIRECTORY_SEPARATOR.'property-info'.\DIRECTORY_SEPARATOR.'PropertyAccessExtractorInterface.php';
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'symfony'.\DIRECTORY_SEPARATOR.'property-info'.\DIRECTORY_SEPARATOR.'PropertyListExtractorInterface.php';
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'symfony'.\DIRECTORY_SEPARATOR.'property-info'.\DIRECTORY_SEPARATOR.'PropertyInfoExtractorInterface.php';
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'symfony'.\DIRECTORY_SEPARATOR.'property-info'.\DIRECTORY_SEPARATOR.'PropertyInitializableExtractorInterface.php';
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'symfony'.\DIRECTORY_SEPARATOR.'property-info'.\DIRECTORY_SEPARATOR.'PropertyInfoExtractor.php';

        return $container->privates['property_info'] = new \Symfony\Component\PropertyInfo\PropertyInfoExtractor(new RewindableGenerator(function () use ($container) {
            yield 0 => ($container->privates['property_info.serializer_extractor'] ?? $container->load('getPropertyInfo_SerializerExtractorService'));
            yield 1 => ($container->privates['property_info.reflection_extractor'] ?? ($container->privates['property_info.reflection_extractor'] = new \Symfony\Component\PropertyInfo\Extractor\ReflectionExtractor()));
            yield 2 => ($container->privates['doctrine.orm.default_entity_manager.property_info_extractor'] ?? $container->load('getDoctrine_Orm_DefaultEntityManager_PropertyInfoExtractorService'));
        }, 3), new RewindableGenerator(function () use ($container) {
            yield 0 => ($container->privates['doctrine.orm.default_entity_manager.property_info_extractor'] ?? $container->load('getDoctrine_Orm_DefaultEntityManager_PropertyInfoExtractorService'));
            yield 1 => ($container->privates['property_info.reflection_extractor'] ?? ($container->privates['property_info.reflection_extractor'] = new \Symfony\Component\PropertyInfo\Extractor\ReflectionExtractor()));
        }, 2), new RewindableGenerator(function () use ($container) {
            return new \EmptyIterator();
        }, 0), new RewindableGenerator(function () use ($container) {
            yield 0 => ($container->privates['doctrine.orm.default_entity_manager.property_info_extractor'] ?? $container->load('getDoctrine_Orm_DefaultEntityManager_PropertyInfoExtractorService'));
            yield 1 => ($container->privates['property_info.reflection_extractor'] ?? ($container->privates['property_info.reflection_extractor'] = new \Symfony\Component\PropertyInfo\Extractor\ReflectionExtractor()));
        }, 2), new RewindableGenerator(function () use ($container) {
            yield 0 => ($container->privates['property_info.reflection_extractor'] ?? ($container->privates['property_info.reflection_extractor'] = new \Symfony\Component\PropertyInfo\Extractor\ReflectionExtractor()));
        }, 1));
    }
}

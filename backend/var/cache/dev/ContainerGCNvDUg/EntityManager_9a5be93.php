<?php

namespace ContainerGCNvDUg;

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolder3ce9d = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializerb4065 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicPropertiesb8d54 = [
        
    ];

    public function getConnection()
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'getConnection', array(), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'getMetadataFactory', array(), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'getExpressionBuilder', array(), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'beginTransaction', array(), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->beginTransaction();
    }

    public function getCache()
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'getCache', array(), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->getCache();
    }

    public function transactional($func)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'transactional', array('func' => $func), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->transactional($func);
    }

    public function commit()
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'commit', array(), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->commit();
    }

    public function rollback()
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'rollback', array(), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'getClassMetadata', array('className' => $className), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'createQuery', array('dql' => $dql), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'createNamedQuery', array('name' => $name), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'createQueryBuilder', array(), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'flush', array('entity' => $entity), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'clear', array('entityName' => $entityName), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->clear($entityName);
    }

    public function close()
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'close', array(), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->close();
    }

    public function persist($entity)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'persist', array('entity' => $entity), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'remove', array('entity' => $entity), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'refresh', array('entity' => $entity), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'detach', array('entity' => $entity), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'merge', array('entity' => $entity), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'getRepository', array('entityName' => $entityName), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'contains', array('entity' => $entity), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'getEventManager', array(), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'getConfiguration', array(), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'isOpen', array(), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'getUnitOfWork', array(), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'getProxyFactory', array(), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'initializeObject', array('obj' => $obj), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'getFilters', array(), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'isFiltersStateClean', array(), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'hasFilters', array(), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return $this->valueHolder3ce9d->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializerb4065 = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHolder3ce9d) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolder3ce9d = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolder3ce9d->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, '__get', ['name' => $name], $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        if (isset(self::$publicPropertiesb8d54[$name])) {
            return $this->valueHolder3ce9d->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder3ce9d;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder3ce9d;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, '__set', array('name' => $name, 'value' => $value), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder3ce9d;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder3ce9d;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, '__isset', array('name' => $name), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder3ce9d;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolder3ce9d;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, '__unset', array('name' => $name), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder3ce9d;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolder3ce9d;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, '__clone', array(), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        $this->valueHolder3ce9d = clone $this->valueHolder3ce9d;
    }

    public function __sleep()
    {
        $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, '__sleep', array(), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;

        return array('valueHolder3ce9d');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializerb4065 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializerb4065;
    }

    public function initializeProxy() : bool
    {
        return $this->initializerb4065 && ($this->initializerb4065->__invoke($valueHolder3ce9d, $this, 'initializeProxy', array(), $this->initializerb4065) || 1) && $this->valueHolder3ce9d = $valueHolder3ce9d;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolder3ce9d;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolder3ce9d;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}

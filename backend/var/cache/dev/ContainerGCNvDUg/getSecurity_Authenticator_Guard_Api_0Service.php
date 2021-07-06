<?php

namespace ContainerGCNvDUg;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getSecurity_Authenticator_Guard_Api_0Service extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'security.authenticator.guard.api.0' shared service.
     *
     * @return \Symfony\Component\Security\Guard\Authenticator\GuardBridgeAuthenticator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['security.authenticator.guard.api.0'] = new \Symfony\Component\Security\Guard\Authenticator\GuardBridgeAuthenticator(new \Lexik\Bundle\JWTAuthenticationBundle\Security\Guard\JWTTokenAuthenticator(($container->services['lexik_jwt_authentication.jwt_manager'] ?? $container->load('getLexikJwtAuthentication_JwtManagerService')), ($container->services['event_dispatcher'] ?? $container->getEventDispatcherService()), new \Lexik\Bundle\JWTAuthenticationBundle\TokenExtractor\ChainTokenExtractor([0 => new \Lexik\Bundle\JWTAuthenticationBundle\TokenExtractor\AuthorizationHeaderTokenExtractor('Bearer', 'Authorization')]), new \Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage()), ($container->privates['security.user.provider.concrete.app_user_provider'] ?? $container->load('getSecurity_User_Provider_Concrete_AppUserProviderService')));
    }
}

<?php

namespace ContainerGCNvDUg;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getSecurity_Authenticator_JsonLogin_LoginService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'security.authenticator.json_login.login' shared service.
     *
     * @return \Symfony\Component\Security\Http\Authenticator\JsonLoginAuthenticator
     */
    public static function do($container, $lazyLoad = true)
    {
        $a = ($container->services['event_dispatcher'] ?? $container->getEventDispatcherService());

        return $container->privates['security.authenticator.json_login.login'] = new \Symfony\Component\Security\Http\Authenticator\JsonLoginAuthenticator(($container->privates['security.http_utils'] ?? $container->load('getSecurity_HttpUtilsService')), ($container->privates['security.user.provider.concrete.app_user_provider'] ?? $container->load('getSecurity_User_Provider_Concrete_AppUserProviderService')), new \Symfony\Component\Security\Http\Authentication\CustomAuthenticationSuccessHandler(new \Lexik\Bundle\JWTAuthenticationBundle\Security\Http\Authentication\AuthenticationSuccessHandler(($container->services['lexik_jwt_authentication.jwt_manager'] ?? $container->load('getLexikJwtAuthentication_JwtManagerService')), $a, []), [], 'login'), new \Symfony\Component\Security\Http\Authentication\CustomAuthenticationFailureHandler(new \Lexik\Bundle\JWTAuthenticationBundle\Security\Http\Authentication\AuthenticationFailureHandler($a), []), ['check_path' => '/api/login_check', 'username_path' => 'email', 'password_path' => 'password', 'use_forward' => false, 'require_previous_session' => false, 'login_path' => '/login'], ($container->privates['property_accessor'] ?? $container->load('getPropertyAccessorService')));
    }
}

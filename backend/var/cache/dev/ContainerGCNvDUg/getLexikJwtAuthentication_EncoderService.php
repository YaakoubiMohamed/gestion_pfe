<?php

namespace ContainerGCNvDUg;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getLexikJwtAuthentication_EncoderService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'lexik_jwt_authentication.encoder' shared service.
     *
     * @return \Lexik\Bundle\JWTAuthenticationBundle\Encoder\LcobucciJWTEncoder
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->services['lexik_jwt_authentication.encoder'] = new \Lexik\Bundle\JWTAuthenticationBundle\Encoder\LcobucciJWTEncoder(new \Lexik\Bundle\JWTAuthenticationBundle\Services\JWSProvider\LcobucciJWSProvider(($container->services['lexik_jwt_authentication.key_loader'] ?? ($container->services['lexik_jwt_authentication.key_loader'] = new \Lexik\Bundle\JWTAuthenticationBundle\Services\KeyLoader\RawKeyLoader($container->getEnv('resolve:JWT_SECRET_KEY'), $container->getEnv('resolve:JWT_PUBLIC_KEY'), $container->getEnv('JWT_PASSPHRASE')))), 'openssl', 'RS256', 3600, 0));
    }
}

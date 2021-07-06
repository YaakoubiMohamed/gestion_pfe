<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

class RegistrationController extends AbstractController
{
    /**
     * @Route("/register", name="app_register", methods={"POST"})0
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder): JsonResponse
    {
        $user = new User();
        $data = json_decode($request->getContent(), true);
        //dd($data);
        ////dd($request);
        //dump($request->query->all());
            // encode the plain password
            $user->setPassword(
                $passwordEncoder->encodePassword(
                    $user,
                    $data["password"]
                )
            );
            $user->setEmail($data["email"]);
            $user->setNom($data["nom"]);
            $user->setPrenom($data["prenom"]);
            $user->setTelephone($data["telephone"]);
            $user->setGrade($data["grade"]);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();
            //dd($user->id);
            // do anything else you need here, like send an email

            //return $this->redirectToRoute('api_login_check');
            $response = new JsonResponse(['status' => $user], 201);
            $response->headers->set('Content-Type', 'application/json');
            $response->headers->set('Access-Control-Allow-Origin', '*');
            return $response;
    
    }
       
}

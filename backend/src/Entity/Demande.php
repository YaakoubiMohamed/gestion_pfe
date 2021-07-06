<?php

namespace App\Entity;

use App\Repository\DemandeRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=DemandeRepository::class)
 */
class Demande
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $date;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $sujet;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="demandes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $etudiant;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="demandes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $encadreur;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?string
    {
        return $this->date;
    }

    public function setDate(string $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getSujet(): ?string
    {
        return $this->sujet;
    }

    public function setSujet(string $sujet): self
    {
        $this->sujet = $sujet;

        return $this;
    }

    public function getEtudiant(): ?User
    {
        return $this->etudiant;
    }

    public function setEtudiant(?User $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    public function getEncadreur(): ?User
    {
        return $this->encadreur;
    }

    public function setEncadreur(?User $encadreur): self
    {
        $this->encadreur = $encadreur;

        return $this;
    }
}

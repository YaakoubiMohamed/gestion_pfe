<?php

namespace App\Entity;

use App\Repository\SoutenanceRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SoutenanceRepository::class)
 */
class Soutenance
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
    private $salle;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="president")
     * @ORM\JoinColumn(nullable=false)
     */
    private $president;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="rapporteur")
     * @ORM\JoinColumn(nullable=false)
     */
    private $rapporteur;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="examinateur")
     * @ORM\JoinColumn(nullable=false)
     */
    private $examinateur;

    /**
     * @ORM\OneToOne(targetEntity=Projet::class, inversedBy="soutenance", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $projet;

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

    public function getSalle(): ?string
    {
        return $this->salle;
    }

    public function setSalle(string $salle): self
    {
        $this->salle = $salle;

        return $this;
    }
    /************** President */
    public function getPresident(): ?User
    {
        return $this->president;
    }

    public function setPresident(?User $president): self
    {
        $this->president = $president;

        return $this;
    }
    /******* Rappoteur*/
    public function getRappoteur(): ?User
    {
        return $this->rappoteur;
    }

    public function setRappoteur(?User $rappoteur): self
    {
        $this->rappoteur = $rappoteur;

        return $this;
    }
    /****** Examinteur*/
    public function getExaminteur(): ?User
    {
        return $this->examinteur;
    }

    public function setExaminteur(?User $examinteur): self
    {
        $this->examinteur = $Examinteur;

        return $this;
    }

    public function getProjet(): ?Projet
    {
        return $this->projet;
    }

    public function setProjet(Projet $projet): self
    {
        $this->projet = $projet;

        return $this;
    }
}

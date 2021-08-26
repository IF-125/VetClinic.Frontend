import { PetImage } from './../../../models/PetImage';
import { Component, Input, OnInit } from '@angular/core';
import { ImageData, DisplayConfig, SameSizeConfig, ImageEffect } from '@creativeacer/ngx-image-display';
import { Pet } from 'src/models/Pet';
import { Subscription } from 'rxjs';
import { PetImagesService } from 'src/app/services/pets/pet-images.service';

@Component({
  selector: 'app-show-images',
  templateUrl: './show-images.component.html',
  styleUrls: ['./show-images.component.scss']
})
export class ShowImagesComponent implements OnInit {

  @Input() displayShowImagesComponent: boolean;
  @Input() selectedPet:Pet;

  petImages: Array<PetImage> = [];

  imagesub: Subscription;
  images: ImageData[] = [];
    
  samesizeConfig: SameSizeConfig={
    active: true,
    imgContainerHeight: '250px'
  };
  displayconfig: DisplayConfig={
    imageminwidth: '250px',
    containerwidth: '80%',
    containerheight: '500px',
    fullScreenView: true 
  };
  hovereffect: ImageEffect={
    hoverEffectActive: true,
    hoverEffect: 'zoom'
  };
  samesizeoption: boolean=true;
  fullscreenoption: boolean;
  hoverEffect: string = '';

  constructor(private PetImagesService:PetImagesService) {
    
   }

  ngOnInit(): void {
    this.setimages();
   
  }

setimages(){
  return this.PetImagesService.getAllPetImages(this.selectedPet.id).subscribe(
    (data)=>{
      this.petImages=data;
      
      let imagesLocal: ImageData[] = [];

      this.petImages.forEach(function (val) {
        let imageX: ImageData = {
          type: 'url',
          imageData: {
            value: val.path,
          }
        }
        imagesLocal.push(imageX)
      })

      this.images=imagesLocal;
    }
  )
}

setImages2() {
  this.images = [
    {
      type: 'url',
      imageData: {
        value: 'https://images.pexels.com/photos/86596/owl-bird-eyes-eagle-owl-86596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        subtext: 'Just some overlay',
        subtextOverlay: 'full'
      }
    },
    {
      type: 'url',
      imageData: {
        value: 'https://images.pexels.com/photos/46248/owl-hunt-nature-hunter-46248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        subtext: 'An owl, they have very funny faces',
        subtextOverlay: 'bottom'
      }
    },
    {
      type: 'url',
      imageData: {
        value: 'https://images.pexels.com/photos/1564839/pexels-photo-1564839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      }
    },
    {
      type: 'url',
      imageData: {
        value: 'https://images.pexels.com/photos/9226/animals-birds-owl-fauna.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      }
    },
    {
      type: 'url',
      imageData: {
        value: 'https://images.pexels.com/photos/33082/owl-close-up-bird-head.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        subtext: 'Dashing!!!',
        subtextOverlay: 'half'
      }
    },
    {
      type: 'url',
      imageData: {
        value: 'https://images.pexels.com/photos/2683946/pexels-photo-2683946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      }
    },
    {
      type: 'url',
      imageData: {
        value: 'https://images.pexels.com/photos/2631628/pexels-photo-2631628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      }
    },
    {
      type: 'url',
      imageData: {
        value: 'https://images.pexels.com/photos/2673450/pexels-photo-2673450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      }
    },
    {
      type: 'url',
      imageData: {
        value: 'https://images.pexels.com/photos/105809/pexels-photo-105809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      }
    },
    {
      type: 'url',
      imageData: {
        value: 'https://images.pexels.com/photos/1579699/pexels-photo-1579699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      }
    },
    {
      type: 'url',
      imageData: {
        value: 'https://images.pexels.com/photos/1310787/pexels-photo-1310787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      }
    },
    {
      type: 'url',
      imageData: {
        value: 'https://images.pexels.com/photos/1051362/pexels-photo-1051362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      }
    }
  ];
}

}

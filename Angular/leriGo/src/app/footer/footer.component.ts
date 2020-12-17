import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  faFacebook = faFacebook
  faInstagram = faInstagram
  faLinkedin = faLinkedin
  faGithub = faGithub

 public id!: string
  foto!: string
  nome: string = "bruno"
  seletor!: string

  constructor() { }

  ngOnInit(): void {
  }

  identificarPessoa(){
    
  }

}
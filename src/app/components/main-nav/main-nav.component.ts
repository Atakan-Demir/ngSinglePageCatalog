import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  languages = [
    { code: 'tr', name: 'Türkçe', disabled: false },
    { code: 'gb', name: 'English', disabled: true },
    { code: 'ru', name: 'Русский', disabled: true },
    // Diğer diller...
  ];
  selectedLanguage = 'tr';
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectLanguage(language : any) {
    if (!language.disabled) {
      this.selectedLanguage = language.code;
      this.dropdownOpen = false;
      // Dil değişikliği işlemleri...
    }
  }

  getLanguageName(code : any) {
    return this.languages.find(lang => lang.code === code)?.name;
  }
}
  


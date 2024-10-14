import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct h3 text', () => {
    const h3Text = fixture.nativeElement.querySelector('h3')?.textContent;
    expect(h3Text).toEqual('Angular unit testing tutorials');
  });

  it('should contain links to external websites', () => {
    const links = fixture.nativeElement.querySelectorAll('mat-nav-list a'); //Testataan, että HTML sisältää linkkejä muille verkkosivuille

    expect(links.length).toBe(3); // Varmistetaan, että linkkejä on kolme

    const expectedLinks = [
        'https://angular.io/guide/testing-components-scenarios',
        'https://testing-angular.com/introduction/#introduction',
        'https://simpleweblearning.com/form-testing-in-angular/'
    ];

    links.forEach((link: HTMLAnchorElement, index: number) => {
        expect(link.href).toBe(expectedLinks[index]); 
    });
  });
});

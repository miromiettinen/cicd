import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackComponent } from './feedback.component';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackComponent ],
      imports: [ RouterTestingModule.withRoutes([]) ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate back to home component when cancel button is clicked', () => {
    const routerSpy = spyOn(router, 'navigate');

    const button = fixture.nativeElement.querySelector('button[type="button"]');
    button.click();

    expect(routerSpy).toHaveBeenCalledOnceWith(['home']);
  });

  it('should call cancel method when cancel button is clicked', () => {
    const cancelSpy = spyOn(component, 'cancel');

    const button = fixture.nativeElement.querySelector('button[type="button"]');
    button.click();

    expect(cancelSpy).toHaveBeenCalled();
  });
});

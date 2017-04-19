/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RatsComponent } from './rats.component';

describe('RatsComponent', () => {
  let component: RatsComponent;
  let fixture: ComponentFixture<RatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

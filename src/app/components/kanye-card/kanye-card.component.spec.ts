import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KanyeCardComponent} from './kanye-card.component';

describe('KanyeCardComponent', () => {
  let component: KanyeCardComponent;
  let fixture: ComponentFixture<KanyeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanyeCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanyeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

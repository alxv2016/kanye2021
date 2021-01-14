import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KanyeQuotesComponent} from './kanye-quotes.component';

describe('KanyeQuotesComponent', () => {
  let component: KanyeQuotesComponent;
  let fixture: ComponentFixture<KanyeQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanyeQuotesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanyeQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

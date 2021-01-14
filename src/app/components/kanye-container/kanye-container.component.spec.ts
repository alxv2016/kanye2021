import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KanyeContainerComponent} from './kanye-container.component';

describe('KanyeContainerComponent', () => {
  let component: KanyeContainerComponent;
  let fixture: ComponentFixture<KanyeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanyeContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanyeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

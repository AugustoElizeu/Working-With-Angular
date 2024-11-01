import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDexComponent } from './list-dex.component';

describe('ListDexComponent', () => {
  let component: ListDexComponent;
  let fixture: ComponentFixture<ListDexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

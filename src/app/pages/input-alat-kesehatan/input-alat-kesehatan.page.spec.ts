import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputAlatKesehatanPage } from './input-alat-kesehatan.page';

describe('InputAlatKesehatanPage', () => {
  let component: InputAlatKesehatanPage;
  let fixture: ComponentFixture<InputAlatKesehatanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InputAlatKesehatanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IsiFormAlatPage } from './isi-form-alat.page';

describe('IsiFormAlatPage', () => {
  let component: IsiFormAlatPage;
  let fixture: ComponentFixture<IsiFormAlatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IsiFormAlatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

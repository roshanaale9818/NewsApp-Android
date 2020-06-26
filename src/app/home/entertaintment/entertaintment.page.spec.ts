import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntertaintmentPage } from './entertaintment.page';

describe('EntertaintmentPage', () => {
  let component: EntertaintmentPage;
  let fixture: ComponentFixture<EntertaintmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertaintmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntertaintmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

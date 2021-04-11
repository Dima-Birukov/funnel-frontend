import {Component, OnInit, TemplateRef} from '@angular/core';
import {StorageService} from '../../shared/storage/storage.service';
import {Router} from '@angular/router';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {FilterFields, PolicyDto, PolicyUpdateDto} from '../entities/management-classes';
import {ManagementApiService} from '../services/management-api.service';
import {monthNames} from '../../shared/tools/parse-tools';

@Component({
  selector: 'fun-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  // @ts-ignore
  policies: Array<PolicyDto>;
  // @ts-ignore
  modalRef: BsModalRef;
  // @ts-ignore
  currentModalPolicy: PolicyDto;
  currentFullAddress = '';
  editModeFlag = false;
  constructor(private storageService: StorageService,
              private router: Router,
              private managementApiService: ManagementApiService,
              private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getPoliciesByFilter({});

    const myModal = document.getElementById('exampleModal');
    const myInput = document.getElementById('myInput');
    if (myInput !== null && myModal !== null) {
      myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus();
      });
    }
  }
  showModal(template: TemplateRef<any>, policy: PolicyDto): void{
    this.modalRef = this.modalService.show(template);
    this.getPolicyFullAddress(policy.email);
    this.currentModalPolicy = policy;
  }
  getPoliciesByFilter(filterFields: Partial<FilterFields>): void{
    this.managementApiService.submitFilterFields(new FilterFields(
      filterFields.businessName,
      filterFields.email,
      filterFields.reference,
      filterFields.startDate
    )).subscribe(policies => {
        this.policies = policies.policyList;
    });
  }
  getPolicyFullAddress(email: string): void{
    this.managementApiService.getFullAddress(email)
      .subscribe( (response) => {
        if (response.policyResponse === 'SUCCESS'){
          this.currentFullAddress = response.policyFullAddress;
        }else{
          console.log(response);
        }
      });
  }
  parseDate(dateInput: string): string{
    const parsedDate = new Date(dateInput);
    return monthNames[parsedDate.getDay()] + ' ' + parsedDate.getMonth() + ', ' + parsedDate.getFullYear();
  }

  updatePolicy(editEmailInput: string, editAddressInput: string, editStartDateInput: string): void{
    this.managementApiService.updatePolicy(new PolicyUpdateDto(
      editEmailInput,
      editAddressInput,
      editStartDateInput,
      this.currentModalPolicy.email))
      .subscribe(response => {
        if (response.policyResponse === 'SUCCESS'){
          this.currentModalPolicy.email = editEmailInput;
          this.currentModalPolicy.policyStartDate = editStartDateInput;

          this.currentFullAddress = editAddressInput;

          this.editModeFlag = false;
        }
      });
  }
}

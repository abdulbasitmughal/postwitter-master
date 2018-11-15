import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'new-post-form',
  templateUrl: 'post-form.component.html'
})
export class NewPostFormComponent implements OnInit {
  postForm: FormGroup;
  alertMessage = '';

  @Output() post: EventEmitter<string> = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initPostForm();
  }

  private initPostForm(): void {
    this.postForm = this.formBuilder.group({
      postText: ['', Validators.required]
    });
  }

  public onSumitPost(): void {
    const form = this.postForm;

    if (form.invalid) {
      this.alertMessage = 'Input some text!';
      return;
    }

    this.post.emit(form.get('postText').value);
    form.reset();
  }
}

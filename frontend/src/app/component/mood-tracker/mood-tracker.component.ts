import {Component} from '@angular/core';
import {MoodService} from "../../service/mood.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField, MatHint} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatOption} from "@angular/material/core";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatSelect} from "@angular/material/select";
import {CreateMoodMutationVariables} from "../../../graphql/generated";

@Component({
  selector: 'mood-tracker',
  templateUrl: './mood-tracker.component.html',
  imports: [FormsModule, MatCardContent, MatFormField, MatInput, ReactiveFormsModule, MatButton, MatCard, MatCardActions, MatCardHeader, MatCardTitle, MatError, MatHint, MatOption, MatRadioButton, MatRadioGroup, MatSelect],
  standalone: true,
  styleUrls: ['./mood-tracker.component.css']
})
export class MoodTrackerComponent {

  readonly moodForm: FormGroup

  name: string = '';
  mood: string = '';

  constructor(private formBuilder: FormBuilder, private moodService: MoodService) {
    this.moodForm = this.formBuilder.group({
      name: [null, Validators.required],
      mood: [null, Validators.required],
      time_of_occurrence: ['today', Validators.required]
    });
  }

  onSubmit() {
    function dateFromFormInput(time_of_occurrence: string) {

      const subtractDays = (date: Date, days: number): Date => {
        const result = new Date(date);
        result.setDate(result.getDate() - days);
        return result;
      };

      switch (time_of_occurrence) {
        case "three_ago":
          return subtractDays(new Date(), 3);
        case "two_ago":
          return subtractDays(new Date(), 2);
        case "one_ago":
          return subtractDays(new Date(), 1);
        case "today":
        default:
          return new Date();
      }
    }

    // Create an object to hold the form data
    const mood: CreateMoodMutationVariables = {
      mood: {
        name: this.moodForm.value.name,
        mood: this.moodForm.value.mood,
        date: dateFromFormInput(this.moodForm.value.time_of_occurrence).toISOString()
      }
    };

    // Call the service method to track the mood
    this.moodService.trackMood(mood);

    // Reset the form fields after submission
    this.name = '';
    this.mood = '';
  }
}

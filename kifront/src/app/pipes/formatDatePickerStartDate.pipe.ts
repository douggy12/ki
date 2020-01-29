import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({ name: 'formatDatePickerStartDate' })
export class FormatDatePickerStartDate implements PipeTransform {
  constructor(private sanitized: DomSanitizer) { }
  transform(value) {
    return value;
  }
}
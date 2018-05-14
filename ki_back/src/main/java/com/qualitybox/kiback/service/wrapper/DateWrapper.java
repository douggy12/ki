/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualityboc.kiback.service.wrapper;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 *
 * @author dmetthey
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class DateWrapper {
    private String date;
    private Long timezone_type;
    private String timezone;

    public DateWrapper() {
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Long getTimezone_type() {
        return timezone_type;
    }

    public void setTimezone_type(Long timezone_type) {
        this.timezone_type = timezone_type;
    }

    public String getTimezone() {
        return timezone;
    }

    public void setTimezone(String timezone) {
        this.timezone = timezone;
    }
    
    
    
    
}

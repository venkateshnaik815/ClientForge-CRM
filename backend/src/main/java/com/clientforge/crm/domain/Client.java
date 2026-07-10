package com.clientforge.crm.domain;
import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Table(name = "clients")
@Data
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String companyName;
    private String industry;
    private String contactPerson;
    private String email;
    private String phone;
    private String status;
    private LocalDate clientSince;
}

package com.clientforge.crm.application;

import com.clientforge.crm.domain.Lead;
import com.clientforge.crm.infrastructure.LeadRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class LeadService {
    private final LeadRepository leadRepository;

    public LeadService(LeadRepository leadRepository) {
        this.leadRepository = leadRepository;
    }

    public List<Lead> getAllLeads() {
        return leadRepository.findAll();
    }

    public Lead createLead(Lead lead) {
        lead.setAddedOn(LocalDate.now());
        if (lead.getStatus() == null || lead.getStatus().isEmpty()) {
            lead.setStatus("New");
        }
        return leadRepository.save(lead);
    }
}

package com.clientforge.crm.presentation;
import com.clientforge.crm.domain.Client;
import com.clientforge.crm.infrastructure.ClientRepository;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/clients")
@CrossOrigin(origins = "http://localhost:5173")
public class ClientController {
    private final ClientRepository repo;

    public ClientController(ClientRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Client> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Client create(@RequestBody Client client) {
        client.setClientSince(LocalDate.now());
        if (client.getStatus() == null) client.setStatus("Active");
        return repo.save(client);
    }
}

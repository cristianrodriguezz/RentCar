package com.example.PI.service;

import com.example.PI.entities.Producto;
import com.example.PI.exceptions.BadRequestException;
import com.example.PI.exceptions.ResourceNotFoundException;
import com.example.PI.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {
    @Autowired
    ProductoRepository productoRepository;

    public Producto crearProducto(Producto producto) throws BadRequestException {
        Optional<Producto> productoBuscado = productoRepository.findProductoByNombre(producto.getNombre());
        if (productoBuscado.isPresent()) {
            throw new BadRequestException("Ya existe un producto con el nombre: " + producto.getNombre());
        }else {
            return productoRepository.save(producto);
        }
    }
    public Producto buscarProductoPorId(Long id) throws ResourceNotFoundException {
        Optional<Producto> productoBuscado = productoRepository.findById(id);
        if (productoBuscado.isPresent()){
            return productoBuscado.get();
        } else {
            throw new ResourceNotFoundException("No se encuentra el producto con id: " + id);
        }
    }
    public List<Producto> listarTodos() throws ResourceNotFoundException {
        List<Producto> productoList = productoRepository.findAll();
        if (productoList.size() > 0) {
            return productoList;
        }else {
            throw new ResourceNotFoundException("No existe ningún producto.");
        }
    }
}

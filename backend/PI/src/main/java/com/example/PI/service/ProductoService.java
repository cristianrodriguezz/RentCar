package com.example.PI.service;

import com.example.PI.entities.Categoria;
import com.example.PI.entities.Producto;
import com.example.PI.exceptions.BadRequestException;
import com.example.PI.exceptions.ResourceNotFoundException;
import com.example.PI.repository.CategoriaRepository;
import com.example.PI.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {
    @Autowired
    ProductoRepository productoRepository;
    @Autowired
    CategoriaRepository categoriaRepository;

    public Producto crearProducto(Producto producto) throws BadRequestException {
        Optional<Producto> productoBuscado = productoRepository.findProductoByNombre(producto.getNombre());
        Optional<Categoria> categoriaABuscar = categoriaRepository.findById(producto.getCategoria().getId());
        if (productoBuscado.isPresent()) {
            throw new BadRequestException("Ya existe un producto con el nombre: " + producto.getNombre());
        }else if (!categoriaABuscar.isPresent()){
            throw new BadRequestException("Asigne una categoría existente a este producto");
        } else if(producto.getImagenes() == null){
            throw new BadRequestException("Asigne al menos una imágen a este producto");
        } else {
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

    public String eliminarProductoPorId(Long id) throws ResourceNotFoundException {
        Producto productoABorrar = buscarProductoPorId(id);
        productoRepository.delete(productoABorrar);
        return "Se borró con éxito el producto con id: " + id;
    }
    public Producto modificarProducto(Producto producto) throws ResourceNotFoundException, BadRequestException {
        Producto productoAModificar = buscarProductoPorId(producto.getId());
        return productoRepository.save(producto);
    }
}

package com.example.PI.service;

import com.example.PI.entities.Categoria;
import com.example.PI.exceptions.BadRequestException;
import com.example.PI.exceptions.ResourceNotFoundException;
import com.example.PI.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService {
    @Autowired
    CategoriaRepository categoriaRepository;
    public Categoria guardarCategoria(Categoria categoria) throws BadRequestException {
        Optional<Categoria> categoriasXTitulo = categoriaRepository.findCategoriaByTitulo(categoria.getTitulo());
        if (categoriasXTitulo.isPresent()){
            throw new BadRequestException("Ya existe una categoría con el titulo: " + categoria.getTitulo());
        }else {
            return categoriaRepository.save(categoria);
        }
    }

    public List<Categoria> buscarTodas(){
        return categoriaRepository.findAll();
    }
    public Optional<Categoria> buscarxId(Long id)throws Exception {
        Optional<Categoria> categoriaBuscada = categoriaRepository.findById(id);
        if(categoriaBuscada.isPresent()){
            return categoriaBuscada;
        }
        else{
            throw new ResourceNotFoundException("No existe la categoría con id: " + id);
        }
    }
    public String eliminarCategoria(Long id) throws Exception {
        Optional<Categoria> categoriaAEliminar = buscarxId(id);
        categoriaAEliminar.isPresent();
        categoriaRepository.deleteById(id);
        return "Se eliminó con éxito la categoría con id: " + id;
    }

    public Categoria actualizarCategoria(Categoria categoria)throws Exception{
       Optional<Categoria> categoriaBuscada = categoriaRepository.findById(categoria.getId());
       if(categoriaBuscada.isPresent()){
           Categoria categoriaActualizada = guardarCategoria(categoria);
            return categoriaActualizada;
       }else{
           throw new ResourceNotFoundException("Categoría con id: " + " no existe");
       }
    }
}

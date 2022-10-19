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
    public Categoria guardarCategoria(Categoria categoria)  {
     return categoriaRepository.save(categoria);
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
            throw new ResourceNotFoundException("No existe la categoria");
        }
    }
    public void eliminarCategoria(Long id){
        categoriaRepository.deleteById(id);
    }

    public Categoria actualizarCategoria(Categoria categoria)throws Exception{
       Optional<Categoria> categoriaBuscada = categoriaRepository.findById(categoria.getId());
       if(categoriaBuscada.isPresent()){
            return categoriaRepository.save(categoriaBuscada.get());
       }else{
           throw new ResourceNotFoundException("Categoria no existe");
       }
    }
}

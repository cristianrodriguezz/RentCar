package com.example.PI.exceptions;

public class BadRequestException extends Exception {
    public BadRequestException(String mensaje) {
        super(mensaje);
    }
}
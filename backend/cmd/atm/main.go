package main

import (
	"log"
	"simple-atm/internal/server"
)

func main() {
	// Start the ATM server
	srv := server.NewServer()
	log.Println("Starting ATM server on port 8080")
	if err := srv.ListenAndServe(); err != nil {
		log.Fatalf("Failed to start ATM server: %v", err)
	}
}
package server

import (
	"net/http"
	"github.com/gorilla/mux"
	"simple-atm/internal/account"
	"simple-atm/internal/transaction"
)

func NewServer() *http.Server {
	r := mux.NewRouter().StrictSlash(false)

	api := r.PathPrefix("/api").Subrouter()
	// Register account routes and handlers
	api.HandleFunc("/account/balance", account.BalanceHandler).Methods("GET")
	api.HandleFunc("/account/create", account.CreateAccountHandler).Methods("POST")

	// Register transaction routes and handlers
	api.HandleFunc("/transaction/deposit", transaction.DepositHandler).Methods("POST")
	api.HandleFunc("/transaction/withdraw", transaction.WithdrawHandler).Methods("POST")


	return &http.Server {
		Addr:    ":8080",
		Handler: r,
	}
}
package account

import (
	"fmt"
	"net/http"
)

func BalanceHandler (w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "BalanceHandler")
}

func CreateAccountHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "CreateAccountHandler")
}
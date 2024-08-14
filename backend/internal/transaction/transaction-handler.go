package transaction

import (
	"fmt"
	"net/http"
)

func DepositHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "DepositHandler")
}

func WithdrawHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "WithdrawHandler")
}
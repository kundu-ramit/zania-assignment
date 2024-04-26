package main

import (
	"log"
	"os"

	"github.com/kundu-ramit/zania-backend/cmd"
	"github.com/kundu-ramit/zania-backend/infra/database"
	"github.com/kundu-ramit/zania-backend/routes"
)

func main() {
	// Get the command-line arguments
	args := os.Args[1:]

	// Check the number of arguments
	if len(args) == 0 {
		log.Fatal("No command specified.")
	}

	// Handle the command
	switch args[0] {
	case "server":
		startServer()
	case "migration":
		applyMigration()
	case "seed":
		applySeed()
	default:
		log.Fatal("Invalid command:", args[0])
	}
}

func applyMigration() {

	db := database.Initialize()
	cmd.ApplyMigration(db)

}

func applySeed() {
	db := database.Initialize()
	cmd.SeedCats(db)
}

func startServer() {

	database.Initialize()
	r := routes.SetupRouter()
	r.Run(":8002")
}

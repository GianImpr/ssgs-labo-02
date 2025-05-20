# Labo-String: CLI per Utilità su Stringhe

Questo progetto fornisce una base per una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.

## Funzionalità Principali

* Inversione di una stringa.
* Verifica se una stringa è palindroma.
* Troncamento di una stringa a una lunghezza massima specificata.
* Conteggio delle occorrenze di ciascun carattere in una stringa.

## Requisiti
Il progetto può essere installato ed avviato solamente se sono installate le seguenti dipendenze:
* `node.js`;
* `git` (solo per l'installazione 1).

## Installazione e Avvio
### Installazione
L'installazione del progetto può essere svolta in diversi modi:
* Utilizzare `git clone`:
  1. Nella sezione `Code` di questa repository, cliccare sul pulsante verde `Code` e copiare l'URL;
  2. Aprire il terminale ed utilizzare il comando `git clone`, seguito dall'URL appena copiato.
* Scaricare il progetto come `.zip`:
  1. Nella sezione `Code` di questa repository, cliccare sul pulsante verde `Code` e poi sul pulsante `Download ZIP`;
  2. Estrarre il file `.zip` appena scaricato in una cartella a scelta.
### Avvio
Per avviare il progetto, seguire i seguenti passaggi:
1. dirigersi nella cartella in cui è stato scaricato il progetto, che contiene il file `index.js`;
2. Per eseguire il programma, utilizzare il seguente comando su terminale: `node index.js <numero_funzione> <stringa_input> [parametro_aggiuntivo]`, dove:
   * `<numero_funzione>` è una delle quattro funzioni che si vuole usare, che sono:
     1. Inversione di una stringa;
     2. Verifica se una stringa è palindroma;
     3. Troncamento di una stringa a una lunghezza massima specificata;
     4. Conteggio delle occorrenze di ciascun carattere in una stringa.
   * `<stringa_input>` è la stringa su cui si applica la funzione. Se c'è bisogno di utilizzare una stringa che contiene blankspace, allora racchiuderla tra apici singoli (es. `'Che forza'`);
   * `[parametro_aggiuntivo]` è un numero intero che serve per dare un dettaglio extra, se necessario per la funzione. (es. la funzione 3 richiede il parametro aggiuntivo per determinare fino a che posizione troncare la stringa). Se non è necessario può essere omesso.

  Dopo l'esecuzione di una funzione, il programma termina. Per riutilizzarlo con un'altra stringa, ripetere solo il passaggio 2 (se si è rimasti nella stessa directory).

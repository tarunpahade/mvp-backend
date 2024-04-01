const express = require("express");
const cors = require('cors');
const app =express()
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");
const { RecursiveCharacterTextSplitter } = require('langchain/text_splitter');
const { Document } = require('@langchain/core/documents');

// Middleware
app.use(cors());
app.use(express());
app.use(fileUpload());


const PORT = process.env.PORT || 3008;


app.get('/todos', (req, res) => {
    res.json({ message: 'Hello, world!' });
  });

app.post('/', (req, res) => {
  console.log('hii');
  pdfParse(req.files.pdfFile).then(async result => {
    console.log(result.text);
    //works uni=til here
    // res.send(result.text);
    
    
    
    
    
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 500,
      separators: ["\n\n", "\n", ' ', ''],
      chunkOverlap: 50,
    });
    
    const docOutput = await splitter.splitDocuments([
      new Document({ pageContent: result.text }),
    ]);
    
console.log(docOutput,'thjis is recursive character splitter');
res.send(docOutput);

});
  // pdfparse(formdata).then(result =>{
  //   console.log(result.text);
    //res.send({text:'Ok'})
    
  // })
});
  
app.post('/todo', (req, res) => {
const todoPayload=req.body
const typeTodoPayload= createTodo



});

app.put('/completed', (req, res) => {
    
const todoPayload=req.body()    
const typeTodoPayload= updateTodo
    
    });
  
  // Start server
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  

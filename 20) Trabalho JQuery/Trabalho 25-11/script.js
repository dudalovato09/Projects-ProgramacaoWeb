$(document).ready(function() {
    // Função para enviar os dados do formulário
    $('#livroForm').submit(function(event) {
      event.preventDefault();
      const data = {
        title: $('#title').val(),
        body: $('#body').val()
      };
  
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        success: function(response) {
          alert('Livro cadastrado com sucesso!');
          // Limpar o formulário após o cadastro (opcional)
          $('#livroForm')[0].reset();
        },
        error: function(error) {
          alert('Erro ao cadastrar o livro.');
        }
      });
    });
  
    // Função para buscar e listar os livros
    function listarLivros(termoBusca = '') {
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        data: { q: termoBusca }, // Parâmetro de busca
        success: function(data) {
          $('#livrosTable').DataTable().clear().draw();
          $('#livrosTable').DataTable().rows.add(data).draw();
        }
      });
    }
  
    // Inicializar o DataTables
    $('#livrosTable').DataTable({
      columns: [
        { data: 'id' },
        { data: 'title' },
        { data: 'body' },
        {
          data: null,
          render: function(data, type, row) {
            return '<button class="btn-editar" data-id="' + row.id + '">Editar</button>';
          }
        }
      ]
    });
  
    // Inicializar o Select2
    $('#search').select2({
      ajax: {
        url: 'https://jsonplaceholder.typicode.com/posts',
        dataType: 'json',
        delay: 250,
        data: function (params) {
          return {
            q: params.term // Search parameter
          };
        },
        processResults: function (data) {
          return {
            results: data.map(item => {
              return {
                id: item.id,
                text: item.title
              }
            })
          };
        }
      }
    });
  
    // Evento para o campo de busca
    $('#search').on('select2:select', function (e) {
      const livroId = e.params.data.id;
      // Carregar os dados do livro no formulário (implementar esta parte)
    });
  
    // Evento para o botão "Editar"
    $('#livrosTable tbody').on('click', '.btn-editar', function() {
      const livroId = $(this).data('id');
      // Carregar os dados do livro no formulário (implementar esta parte)
    });
  
    // Carregar os livros inicialmente
    listarLivros();
  });
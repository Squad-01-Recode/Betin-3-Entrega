using Microsoft.AspNetCore.Mvc;
using projetoCsharp.Model;
using myProject.Repository;
using System.Threading.Tasks;
using System.Linq;

namespace projetoCsharp.Controllers
{
   [ApiController]
   [Route("api/[controller]")]
   public class UsuarioController : ControllerBase
   {

      private readonly IUsuarioRepository _repository;

      public UsuarioController(IUsuarioRepository repository)
      {
         _repository = repository;
      }

      [HttpGet]
      public async Task<IActionResult> GetAll()
      {
         var usuarios = await _repository.GetUsuarios();
         return usuarios.Any() ? Ok(usuarios) : NoContent();
      }

      [HttpGet("{id}")]
      public async Task<IActionResult> GetById(int id)
      {
         var usuario = await _repository.GetUsuarioById(id);
         return usuario != null
         ? Ok(usuario) : NotFound("usuario não encontrado.");
      }

      [HttpPost]
      public async Task<IActionResult> Post(Usuario usuario)
      {
         _repository.AddUsuario(usuario);
         return await _repository.SaveChangesAsync()
         ? Ok("Adicionado") : BadRequest("Erro");
      }

      [HttpPut("{id}")]
      public async Task<IActionResult> Atualizar(int id, Usuario usuario)
      {
         var usuarioExiste = await _repository.GetUsuarioById(id);
         if (usuarioExiste == null) return NotFound("usuario não encontrado");

         usuarioExiste.Email = usuario.Email ?? usuarioExiste.Email;
         usuarioExiste.Nome = usuario.Nome ?? usuarioExiste.Nome;
         usuarioExiste.Senha = usuario.Senha ?? usuarioExiste.Senha;
         usuarioExiste.Idade = usuario.Idade ?? usuarioExiste.Idade;

         _repository.AtualizarUsuario(usuarioExiste);

         return await _repository.SaveChangesAsync()
         ? Ok("atualizado.") : BadRequest("Erro");
      }

      [HttpDelete("{id}")]
      public async Task<IActionResult> Delete(int id)
      {
         var usuarioExiste = await _repository.GetUsuarioById(id);
         if (usuarioExiste == null)
            return NotFound("não encontrado");

         _repository.DeletarUsuario(usuarioExiste);

         return await _repository.SaveChangesAsync()
         ? Ok("deletado.") : BadRequest("Erro");
      }

   }
}
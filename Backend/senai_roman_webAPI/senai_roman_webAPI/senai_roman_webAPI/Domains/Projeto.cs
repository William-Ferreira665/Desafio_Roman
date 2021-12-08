using System;
using System.Collections.Generic;

#nullable disable

namespace senai_roman_webAPI.Domains
{
    public partial class Projeto
    {
        public int IdProjeto { get; set; }
        public int? IdTema { get; set; }
        public int? IdUsuario { get; set; }
        public string NomeProjeto { get; set; }
        public string Descricao { get; set; }

        public virtual Tema IdTemaNavigation { get; set; }
        public virtual TipoUsuario IdUsuarioNavigation { get; set; }
    }
}

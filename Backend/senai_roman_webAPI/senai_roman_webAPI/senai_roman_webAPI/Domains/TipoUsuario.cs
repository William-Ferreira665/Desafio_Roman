using System;
using System.Collections.Generic;

#nullable disable

namespace senai_roman_webAPI.Domains
{
    public partial class TipoUsuario
    {
        public TipoUsuario()
        {
            Projetos = new HashSet<Projeto>();
            Usuarios = new HashSet<Usuario>();
        }

        public int IdTipoUsuario { get; set; }
        public string TituloTipoUsuario { get; set; }

        public virtual ICollection<Projeto> Projetos { get; set; }
        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}

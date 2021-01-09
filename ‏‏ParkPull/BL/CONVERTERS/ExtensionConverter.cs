using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class ExtensionConverter
    {

        public static Extension ConvertExtensionToDAL(ExtensionDTO Extension)
        {
            return new Extension
            {
                ExtensionsCode= Extension.ExtensionsCode,
                ExtensionsName= Extension.ExtensionsName
            };
        }

        public static ExtensionDTO ConvertExtensionToDTO(Extension Extension)
        {
            return new ExtensionDTO
            {
                ExtensionsCode = Extension.ExtensionsCode,
                ExtensionsName = Extension.ExtensionsName
            };
        }
    }
}

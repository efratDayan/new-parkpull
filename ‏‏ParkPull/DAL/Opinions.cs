//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Opinions
    {
        public int opinionCode { get; set; }
        public int rentedParkingCode { get; set; }
        public Nullable<int> rating { get; set; }
        public string comment { get; set; }
    
        public virtual rentedParkings rentedParkings { get; set; }
    }
}

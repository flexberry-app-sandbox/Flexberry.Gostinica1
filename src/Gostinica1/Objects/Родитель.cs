﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Gostinica1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Родитель.
    /// </summary>
    // *** Start programmer edit section *** (Родитель CustomAttributes)

    // *** End programmer edit section *** (Родитель CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РодительE", new string[] {
            "ФИО as \'ФИО\'"})]
    [View("РодительL", new string[] {
            "ФИО as \'ФИО\'"})]
    public class Родитель : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИО;
        
        // *** Start programmer edit section *** (Родитель CustomMembers)

        // *** End programmer edit section *** (Родитель CustomMembers)

        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Родитель.ФИО CustomAttributes)

        // *** End programmer edit section *** (Родитель.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Родитель.ФИО Get start)

                // *** End programmer edit section *** (Родитель.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Родитель.ФИО Get end)

                // *** End programmer edit section *** (Родитель.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Родитель.ФИО Set start)

                // *** End programmer edit section *** (Родитель.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Родитель.ФИО Set end)

                // *** End programmer edit section *** (Родитель.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РодительE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РодительE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РодительE", typeof(IIS.Gostinica1.Родитель));
                }
            }
            
            /// <summary>
            /// "РодительL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РодительL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РодительL", typeof(IIS.Gostinica1.Родитель));
                }
            }
        }
    }
}

﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Logistika_snova
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Т ч инф о конт.
    /// </summary>
    // *** Start programmer edit section *** (ТЧИнфОКонт CustomAttributes)

    // *** End programmer edit section *** (ТЧИнфОКонт CustomAttributes)
    [AutoAltered()]
    [Caption("Информация о контейнере")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧИнфОКонтE", new string[] {
            "ЗагрузКонтейн as \'Номер документа загрузки контейнеров\'",
            "ЗагрузКонтейн.НомерДокЗагк as \'Номер документа загрузки контейнеров\'",
            "ЗагрузКонтейн.Контейнеры.НомерКонтей as \'Номер контейнера\'",
            "ЗагрузКонтейн.Контейнеры.Объем as \'Объем контейнера\'",
            "ЗагрузКонтейн.Контейнеры.МаксВес as \'Максимальный вес контейнера\'",
            "ДокумПостав as \'Номер документа поставки\'",
            "ДокумПостав.НомДокПостав as \'Номер документа поставки\'",
            "ДокумПостав.Клиенты.АдресПоставки as \'Адрес поставки\'"}, Hidden=new string[] {
            "ЗагрузКонтейн.НомерДокЗагк",
            "ДокумПостав.НомДокПостав"})]
    [MasterViewDefineAttribute("ТЧИнфОКонтE", "ЗагрузКонтейн", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "НомерДокЗагк")]
    [MasterViewDefineAttribute("ТЧИнфОКонтE", "ДокумПостав", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "НомДокПостав")]
    public class ТЧИнфОКонт : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Logistika_snova.ДокумПостав fДокумПостав;
        
        private IIS.Logistika_snova.ЗагрузКонтейн fЗагрузКонтейн;
        
        private IIS.Logistika_snova.ЗагрузкаБаржи fЗагрузкаБаржи;
        
        // *** Start programmer edit section *** (ТЧИнфОКонт CustomMembers)

        // *** End programmer edit section *** (ТЧИнфОКонт CustomMembers)

        
        /// <summary>
        /// Т ч инф о конт.
        /// </summary>
        // *** Start programmer edit section *** (ТЧИнфОКонт.ДокумПостав CustomAttributes)

        // *** End programmer edit section *** (ТЧИнфОКонт.ДокумПостав CustomAttributes)
        [PropertyStorage(new string[] {
                "ДокумПостав"})]
        [NotNull()]
        public virtual IIS.Logistika_snova.ДокумПостав ДокумПостав
        {
            get
            {
                // *** Start programmer edit section *** (ТЧИнфОКонт.ДокумПостав Get start)

                // *** End programmer edit section *** (ТЧИнфОКонт.ДокумПостав Get start)
                IIS.Logistika_snova.ДокумПостав result = this.fДокумПостав;
                // *** Start programmer edit section *** (ТЧИнфОКонт.ДокумПостав Get end)

                // *** End programmer edit section *** (ТЧИнфОКонт.ДокумПостав Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧИнфОКонт.ДокумПостав Set start)

                // *** End programmer edit section *** (ТЧИнфОКонт.ДокумПостав Set start)
                this.fДокумПостав = value;
                // *** Start programmer edit section *** (ТЧИнфОКонт.ДокумПостав Set end)

                // *** End programmer edit section *** (ТЧИнфОКонт.ДокумПостав Set end)
            }
        }
        
        /// <summary>
        /// Т ч инф о конт.
        /// </summary>
        // *** Start programmer edit section *** (ТЧИнфОКонт.ЗагрузКонтейн CustomAttributes)

        // *** End programmer edit section *** (ТЧИнфОКонт.ЗагрузКонтейн CustomAttributes)
        [PropertyStorage(new string[] {
                "ЗагрузКонтейн"})]
        [NotNull()]
        public virtual IIS.Logistika_snova.ЗагрузКонтейн ЗагрузКонтейн
        {
            get
            {
                // *** Start programmer edit section *** (ТЧИнфОКонт.ЗагрузКонтейн Get start)

                // *** End programmer edit section *** (ТЧИнфОКонт.ЗагрузКонтейн Get start)
                IIS.Logistika_snova.ЗагрузКонтейн result = this.fЗагрузКонтейн;
                // *** Start programmer edit section *** (ТЧИнфОКонт.ЗагрузКонтейн Get end)

                // *** End programmer edit section *** (ТЧИнфОКонт.ЗагрузКонтейн Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧИнфОКонт.ЗагрузКонтейн Set start)

                // *** End programmer edit section *** (ТЧИнфОКонт.ЗагрузКонтейн Set start)
                this.fЗагрузКонтейн = value;
                // *** Start programmer edit section *** (ТЧИнфОКонт.ЗагрузКонтейн Set end)

                // *** End programmer edit section *** (ТЧИнфОКонт.ЗагрузКонтейн Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Logistika_snova.ЗагрузкаБаржи.
        /// </summary>
        // *** Start programmer edit section *** (ТЧИнфОКонт.ЗагрузкаБаржи CustomAttributes)

        // *** End programmer edit section *** (ТЧИнфОКонт.ЗагрузкаБаржи CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ЗагрузкаБаржи"})]
        public virtual IIS.Logistika_snova.ЗагрузкаБаржи ЗагрузкаБаржи
        {
            get
            {
                // *** Start programmer edit section *** (ТЧИнфОКонт.ЗагрузкаБаржи Get start)

                // *** End programmer edit section *** (ТЧИнфОКонт.ЗагрузкаБаржи Get start)
                IIS.Logistika_snova.ЗагрузкаБаржи result = this.fЗагрузкаБаржи;
                // *** Start programmer edit section *** (ТЧИнфОКонт.ЗагрузкаБаржи Get end)

                // *** End programmer edit section *** (ТЧИнфОКонт.ЗагрузкаБаржи Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧИнфОКонт.ЗагрузкаБаржи Set start)

                // *** End programmer edit section *** (ТЧИнфОКонт.ЗагрузкаБаржи Set start)
                this.fЗагрузкаБаржи = value;
                // *** Start programmer edit section *** (ТЧИнфОКонт.ЗагрузкаБаржи Set end)

                // *** End programmer edit section *** (ТЧИнфОКонт.ЗагрузкаБаржи Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧИнфОКонтE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧИнфОКонтE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧИнфОКонтE", typeof(IIS.Logistika_snova.ТЧИнфОКонт));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ТЧИнфОКонт.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfТЧИнфОКонт CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfТЧИнфОКонт CustomAttributes)
    public class DetailArrayOfТЧИнфОКонт : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Logistika_snova.DetailArrayOfТЧИнфОКонт members)

        // *** End programmer edit section *** (IIS.Logistika_snova.DetailArrayOfТЧИнфОКонт members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ТЧИнфОКонт by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ТЧИнфОКонт.
        /// </summary>
        public DetailArrayOfТЧИнфОКонт(IIS.Logistika_snova.ЗагрузкаБаржи fЗагрузкаБаржи) : 
                base(typeof(ТЧИнфОКонт), ((ICSSoft.STORMNET.DataObject)(fЗагрузкаБаржи)))
        {
        }
        
        public IIS.Logistika_snova.ТЧИнфОКонт this[int index]
        {
            get
            {
                return ((IIS.Logistika_snova.ТЧИнфОКонт)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Logistika_snova.ТЧИнфОКонт dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}

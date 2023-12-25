package Logistika_snova.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Logistika_snova.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ЗагрузкаБаржи
 */
@Entity(name = "IISLogistika_snovaЗагрузкаБаржи")
@Table(schema = "public", name = "ЗагрузкаБаржи")
public class ZagruzkaBarzhi {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ОбъемБарСв")
    private Double объембарсв;

    @Column(name = "ОстатокПоВесу")
    private Double остатокповесу;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "НомерДокЗБ")
    private Integer номердокзб;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Barzhi")
    @Convert("Barzhi")
    @Column(name = "Баржи", length = 16, unique = true, nullable = false)
    private UUID _barzhiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Barzhi", insertable = false, updatable = false)
    private Barzhi barzhi;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;

    @OneToMany(mappedBy = "zagruzkabarzhi", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHInfOKont> tchinfokonts;


    public ZagruzkaBarzhi() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getОбъемБарСв() {
      return объембарсв;
    }

    public void setОбъемБарСв(Double объембарсв) {
      this.объембарсв = объембарсв;
    }

    public Double getОстатокПоВесу() {
      return остатокповесу;
    }

    public void setОстатокПоВесу(Double остатокповесу) {
      this.остатокповесу = остатокповесу;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Integer getНомерДокЗБ() {
      return номердокзб;
    }

    public void setНомерДокЗБ(Integer номердокзб) {
      this.номердокзб = номердокзб;
    }


}
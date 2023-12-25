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
 * Entity implementation class for Entity: ЗагрузКонтейн
 */
@Entity(name = "IISLogistika_snovaЗагрузКонтейн")
@Table(schema = "public", name = "ЗагрузКонтейн")
public class ZagruzKontejn {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ОбъемСвобод")
    private Double объемсвобод;

    @Column(name = "ОстатокПоВесу")
    private Double остатокповесу;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "НомерДокЗагк")
    private Integer номердокзагк;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kontejnery")
    @Convert("Kontejnery")
    @Column(name = "Контейнеры", length = 16, unique = true, nullable = false)
    private UUID _kontejneryid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kontejnery", insertable = false, updatable = false)
    private Kontejnery kontejnery;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;

    @OneToMany(mappedBy = "zagruzkontejn", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHInfOGruze> tchinfogruzes;


    public ZagruzKontejn() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getОбъемСвобод() {
      return объемсвобод;
    }

    public void setОбъемСвобод(Double объемсвобод) {
      this.объемсвобод = объемсвобод;
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

    public Integer getНомерДокЗагк() {
      return номердокзагк;
    }

    public void setНомерДокЗагк(Integer номердокзагк) {
      this.номердокзагк = номердокзагк;
    }


}
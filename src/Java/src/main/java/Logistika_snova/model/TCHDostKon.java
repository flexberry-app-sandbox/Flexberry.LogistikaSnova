package Logistika_snova.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Logistika_snova.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧДостКон
 */
@Entity(name = "IISLogistika_snovaТЧДостКон")
@Table(schema = "public", name = "ТЧДостКон")
public class TCHDostKon {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Gruz")
    @Convert("Gruz")
    @Column(name = "Груз", length = 16, unique = true, nullable = false)
    private UUID _gruzid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Gruz", insertable = false, updatable = false)
    private Gruz gruz;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZagruzKontejn")
    @Convert("ZagruzKontejn")
    @Column(name = "ЗагрузКонтейн", length = 16, unique = true, nullable = false)
    private UUID _zagruzkontejnid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZagruzKontejn", insertable = false, updatable = false)
    private ZagruzKontejn zagruzkontejn;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DokumRezultP")
    @Convert("DokumRezultP")
    @Column(name = "ДокумРезультП", length = 16, unique = true, nullable = false)
    private UUID _dokumrezultpid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DokumRezultP", insertable = false, updatable = false)
    private DokumRezultP dokumrezultp;


    public TCHDostKon() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}